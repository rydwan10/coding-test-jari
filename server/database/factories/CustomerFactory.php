<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *$table->string("nama");
            $table->text("alamat");
            $table->string("email");
            $table->string("hp");
            $table->string("image");
            $table->boolean("status");
     * @return array
     */
    public function definition()
    {
        return [
            'kode' => Str::random(10),
            'nama' => $this->faker->name(),
            'alamat' => $this->faker->address(),
            'email' => $this->faker->unique()->safeEmail(),
            'hp' => $this->faker->unique()->phoneNumber(),
            'image' => $this->faker->text(5),
            'status' => true
        ];
    }
}
