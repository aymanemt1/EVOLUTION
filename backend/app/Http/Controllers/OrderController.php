<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Client;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Orderr;
use Illuminate\Http\Request;

class OrderController extends Controller
{
   public function getOrderrs(){
    $orderss = Order::with('items.product')->get();
   
     return response()->json([
        'orderss' => $orderss,
    ]);
   }

   public function AddOrder(Request $request){
    $firstname = $request->firstname;
    $lastname = $request->lastname;
    $email = $request->email;
    $phone = $request->phone;
    $city = $request->city;
    $address = $request->adress; 

    $orderItems = $request->orderItems;

    // Check if there are order items
    if (count($orderItems) === 0) {
        return response()->json(['message' => 'No order items provided'], 400);
    }

    // Check if the client exists by email
    $client = Client::where('email', $email)->first();

    // If the client doesn't exist, create a new one
    if (!$client) {
        $client = new Client();
        $client->firstname = $firstname;
        $client->lastname = $lastname;
        $client->email = $email;
        $client->phone = $phone;
        $client->city = $city;
        $client->address = $address;
        $client->save();
    }

    // Calculate total amount
    $totalAmount = 0;
    foreach ($orderItems as $item) {
        $totalAmount += $item['price'];
    }

    // Create a new order
    $order = new Order();
    $order->client_id = $client->id;
    $order->total_amount = $totalAmount;
    $order->status = 'Pending';
    $order->save();

    // Add order items
    foreach ($orderItems as $item) {
        $orderItem = new OrderItem();
        $orderItem->order_id = $order->id; 
        $orderItem->product_id = $item['productId'];
        $orderItem->quantity = $item['quantity'];
        $orderItem->price = $item['price'];
        $orderItem->save();
    }

    return response()->json(['message' => 'Order added successfully'], 200);
}



}
