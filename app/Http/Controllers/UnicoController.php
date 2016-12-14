<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;

class UnicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome');
    }

    public function question(Request $request)
    {
        $id_subject;
        $min;
        $max;
        if (strcmp($request->input('verbalTime'),'simplePast') == 0){
            $id_subject = 1;
            if (strcmp($request->input('gameMode'),'completation') == 0){
                $min=1;
                $max=10;
            }     
            else{
                $min=11;
                $max=20;
            }       
        }
        else{
            $id_subject = 2;
            if (strcmp($request->input('gameMode'),'completation') == 0){
                $min=21;
                $max=30;
            }     
            else{
                $min=31;
                $max=40;
            } 
        }

        $id_question = random_int($min, $max);
        $question = DB::select('select * from question as q where q.id = ? and q.subject_id = ?', [
            $id_question,
            $id_subject
        ]);
        $possibleAnswer = DB::select('select 
        (select content from possibleAnswer e where e.id=a.possibleAnswer_id) as posibleAnswer 
        from question_possibleAnswer a where a.question_id = ?', [
            $id_question
        ]);   
        $answer = DB::select('select content as answer from answer where question_id = ?', [
            $id_question
        ]);       

        return json_encode(array_merge($question,$possibleAnswer,$answer),true);
    }

    public function answer(Request $request)
    {
        $result = DB::select('select * from answer where question_id = ? and content= ?', [
            $request->input('questionId'),
            $request->input('answer')
        ]);

        return json_encode($result,true);
    }
}
