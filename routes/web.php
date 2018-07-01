<?php

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
 */

Route::get('/', function () {
    return view('welcome');
});

Route::get('/starwars', function() {

    return view('starwars');
});

Route::get('/json', function() {

    $response = file_get_contents('https://swapi.co/api/people/?page=1');

    $response = json_decode($response, true);

    $results = $response['results'];

    do {
        $response = file_get_contents($response['next']);
        $response = json_decode($response, true);
        $results = array_merge($results, $response['results']);
    } while (!empty($response['next']));

    $results['results'] = $results;
    $results = json_encode($results);
    return $results;
});
