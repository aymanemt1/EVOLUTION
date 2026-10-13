<?php

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Delivery;
use App\Models\Order;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetOrdersTest extends TestCase
{
    use RefreshDatabase;

    public function test_returns_empty_orders_when_user_has_no_client_profile(): void
    {
        $user = User::factory()->create();

        $response = $this->getJson('/api/getOrderrs?id='.$user->id);

        $response->assertOk()
            ->assertJsonPath('orderssCount', 0)
            ->assertJsonPath('orderss', [])
            ->assertJsonPath('clientId', (string) $user->id);
    }

    public function test_returns_orders_for_an_existing_client(): void
    {
        $user = User::factory()->create();

        $client = new Client();
        $client->firstname = 'Ada';
        $client->lastname = 'Lovelace';
        $client->email = 'ada@example.com';
        $client->user_id = $user->id;
        $client->save();

        $delivery = new Delivery();
        $delivery->name = 'Standard';
        $delivery->description = 'Standard delivery';
        $delivery->delivery_time = '2-3 business days';
        $delivery->price = 5;
        $delivery->save();

        $order = new Order();
        $order->client_id = $client->id;
        $order->total_amount = 20;
        $order->status = 'pending';
        $order->delivery_id = $delivery->id;
        $order->save();

        $response = $this->getJson('/api/getOrderrs?id='.$user->id);

        $response->assertOk()
            ->assertJsonPath('orderssCount', 1)
            ->assertJsonPath('orderss.0.id', $order->id)
            ->assertJsonPath('clientId', (string) $user->id);
    }
}
