<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\users_cadastrados;

class users_cadastradosController extends Controller
{
    public function status(){
        return ['status' => true];
    }

    // Register the user in the database

    public function add(Request $request){
        try{
            $users_cadastrados = new users_cadastrados();

            $users_cadastrados->nome = $request->nome;
            $users_cadastrados->sobrenome = $request->sobrenome;
            $users_cadastrados->email = $request->email;
            $users_cadastrados->password = $request->password;

            $users_cadastrados->save();

            return ['retorno' => 'Usuário cadastrado com sucesso'];

        } catch(\Exception $erro){
            return ['retorno' => 'erro', 'details' => $erro];
        }
    }

    // Return the entire database in json format

    public function list(){
        $users_cadastrados = users_cadastrados::all(); // An interesting option is, you define whatever you print. Ex: all("id", "name"), Will return you only name and id

        return $users_cadastrados;
    }

    // Return a certain user, not all. Ex: Print user 1, etc.

    public function select($id){
        $users_cadastrados = users_cadastrados::find($id);

        return $users_cadastrados;
    }
}