<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <title>pdf</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style>
        body {
            background: whitesmoke;
        }
        .page {
            margin: 20px auto;
            height: auto;
            width: 600px;
            padding: 10px 30px;
            box-shadow: 0 0 100px rgba(0,0,0,0.2);
            max-width: 100%;
            background: white;
        }
        .f {
            color: #212e59;
            font-size: 3em;
            font-family: 'Oswald', sans-serif;
        }
        img {
            height: 70px;
            position: absolute;
            margin-left: 530px;
            margin-top: 40px;
        }
        .address {
            margin-top: 120px;
            font-size: 13px;
            font-family: 'Oswald', sans-serif;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
            font-family: 'Teko', sans-serif;
        }
        .title {
            margin-top: 700px;
            text-align: center;
        }
        .title h1 {
            font-family: 'Dancing Script', cursive;
            font-weight: 600;
            font-size: 3.5rem;
            color: #212e59;
        }
        .title p {
            font-family: 'Teko';
            font-size: 1.3rem;
            font-weight: 400;
            text-transform: uppercase;
            color: red;
        }
    </style>
</head>
<body>
    <div class="page">
        <h1 class="f">RECEIPT</h1>
        {{-- <img src="https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?size=338&ext=jpg" align="right"> --}}
        
        <table>
            <tr>
                <th>BILL TO</th>
                <th>SHIP TO</th>
                <th>RECEIPT#</th>
            </tr>
            <tr>
                <td>{{ $data->nom }}</td>
                {{-- <td>{{ $client->name }}</td> --}}
                {{-- <td>{{ $order->id }}</td> --}}
            </tr>
            <tr>
                {{-- <td>{{ $client->address }}</td> --}}
                {{-- <td>{{ $order->delivery->description }}</td> --}}
                <td>RECEIPT DATE</td>
            </tr>
            <tr>
                {{-- <td> {{ $client->name }}</td> --}}
                {{-- <td>{{ $order->delivery->delivery_time }}</td> --}}
                {{-- <td>{{ $order->created_at->format('m/d/Y') }}</td> --}}
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>DUE DATE</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                {{-- <td>{{ $order->created_at->addDays(15)->format('m/d/Y') }}</td> --}}
            </tr>
        </table>
        
        <table>
            <tr>
                <th>QTY</th>
                <th>DESCRIPTION</th>
                <th>UNIT PRICE</th>
                <th>AMOUNT</th>
            </tr>
            {{-- @foreach ($order->items as $item)
                <tr>
                    <td>{{ $item->quantity }}</td>
                    <td>{{ $item->product->description }}</td>
                    <td>${{ number_format($item->price, 2) }}</td>
                    <td>${{ number_format($item->quantity * $item->price, 2) }}</td>
                </tr>
            @endforeach --}}
        </table>
        
        {{-- <table>
            <tr>
                <td>Subtotal</td>
                <td>${{ number_format($order->total_amount - $order->delivery->price, 2) }}</td>
            </tr>
            <tr>
                <td>Delivery</td>
                <td>${{ number_format($order->delivery->price, 2) }}</td>
            </tr>
            <tr>
                <td>Sales Tax 6.25%</td>
                <td>${{ number_format(($order->total_amount - $order->delivery->price) * 0.0625, 2) }}</td>
            </tr>
            <tr>
                <th>TOTAL</th>
                <th>${{ number_format($order->total_amount, 2) }}</th>
            </tr>
        </table> --}}

        <div class="title">
            <h1>Thank You</h1>
            <p>Payment is due within 15 days.</p>
        </div>
    </div>
</body>
</html>
