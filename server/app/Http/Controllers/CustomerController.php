<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $posts = Customer::orderByDesc("updated_at")->get();

            return response()->json([
                "response" => "OK",
                "statusCode" => 200,
                "message" => "Successfully get all data",
                "data" => $posts
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(
                [
                    "response" => "Internal Server Error",
                    "statusCode" => 500,
                ],
                500
            );
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $customer = Customer::where('id', $id);
            if ($customer->exists()) {
                $customer = Customer::find($id);
                return response()->json(
                    [
                        "response" => "Success",
                        "statusCode" => 200,
                        "message" => "Successfully get customer with id $id",
                        "data" => $customer
                    ]
                );
            }

            if (!$customer->exists()) {
                return response()->json(
                    [
                        "response" => "Not Found",
                        "statusCode" => 404,
                        "message" => "Customer with id $id is not found",
                        "data" => null,
                    ],
                    404
                );
            }
        } catch (\Throwable $th) {
            return response()->json(
                [
                    "response" => "Internal Server Error",
                    "statusCode" => 500,
                ],
                500
            );
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $customer = Customer::where('id', $id);
            if (!$customer->exists()) {
                return response()->json(
                    [
                        "response" => "Not Found",
                        "statusCode" => 404,
                        "message" => "Customer with id $id is not found",
                        "data" => null,
                    ],
                    404
                );
            }
            $customer = Customer::find($id);
            Customer::destroy($id);

            return response()->json(
                [
                    "response" => "Success",
                    "statusCode" => 200,
                    "message" => "Customer with id $id is successfully deleted",
                    "data" => $customer
                ],
                200
            );
        } catch (\Throwable $th) {
            return response()->json(
                [
                    "response" => "Internal Server Error",
                    "statusCode" => 500,
                ],
                500
            );
        }
    }
}
