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
  
    public function ticket(Request $request, $id)
    {
        // Fetch the order using the provided ID
        // $order = Order::find($id);
    
        // if (!$order) {
        //     return response()->json(['error' => 'Order not found'], 404);
        // }

        $data = [
            'nom' => 'aymane',
        ];
    
        $pdf = PDF::loadView('ticket', $data);
    
        // Return the PDF as a downloadable response
        return $pdf->download('ticket.pdf');
    }
}
