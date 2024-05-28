<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Formation;
use App\Models\Module;
use App\Models\Order;
use App\Models\Reservation;
use Barryvdh\DomPDF\Facade\Pdf;
use Dompdf\Dompdf;
use Illuminate\Http\Request;


class ticketController extends Controller
{
  
    // public function ticket(Request $request)
    // {

    //     $client = Client::find($request->client_id);
    //     $order = Order::with('items.product', 'delivery')->find($request->id);
    
    //     $data = [
    //         'client' => $client,
    //         'order' => $order,
    //     ];
    

    //     $pdf = PDF::loadView('ticket', $data);
    
    //     return $pdf->download('ticket.pdf');
    // }
    
  
}
