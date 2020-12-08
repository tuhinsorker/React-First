<?php
Header('Access-Control-Allow-Origin: *'); //for allow any domain, insecure
Header('Access-Control-Allow-Headers: *'); //for allow any headers, insecure
Header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE'); //method allowed

class Api extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

	public function index(){
		$json = array(
			'status' => "OK"
		);
		echo json_encode(array('data' => $json),JSON_UNESCAPED_UNICODE);
	}


	public function userlist()
	{
		$users = $this->db->select('*')->from('user_info')->get()->result();

		echo json_encode(array('data' => $users),JSON_UNESCAPED_UNICODE);
	}


	public function saveData()
	{

		$postdata = file_get_contents('php://input');
	    $data = json_decode($postdata);


	    $full_name  = $data->name;
		$email 		= $data->name_email;
		$password 	= $data->pass;


		if (empty($full_name) || empty($email) || empty($password)) {

			$json = array(
				'status'  => 'error',
				'error' => "Please fillup all required field !", 
			);
			echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);

		} else {

			$user = $this->db->select('*')
					->from('user_info')
					->where('email',$email)
					->get()
					->num_rows();

			if ($user > 0) {

				$json = array(
					'status'  => 'error',
					'error'  => 'Email already exists !'
				);

				echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);

			}else{

				$data = array(
					'name' 		=> $full_name,
					'email'		=> $email,
					'password' 	=> md5($password),
					'user_type' => 5,
					'status' 	=> 1,
				);
				$result = $this->db->insert('user_info',$data);
				$id = $this->db->insert_id();

				if ($result) {
					$json = array(
						'status'  => 'ok',
						'user_id' => $id 
					);
					echo $json_encode = json_encode( $json,JSON_UNESCAPED_UNICODE);
				}
			}
		} 
	}
	
	
	
	public function userLogin()
	{

		$postdata = file_get_contents('php://input');
	    $data = json_decode($postdata);

		$email 		= $data->name_email;
		$password 	= $data->pass;


		if (empty($email) || empty($password)) {

			$json = array(
				'status'  => 'error',
				'error' => "Please fillup all required field !", 
			);
			echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);


		} else {

			$password = md5($password);
	        $result   = $this->db->where('email',$email)->where('password',$password)->where('status',1)->get('user_info')->row();

			if ($result)
			{

				$json = array(
					'status' => 'ok',
					'user_id'	  => $result->id,
					'email' 	  => $email,
				);
				echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);


			}else{

				$json = array(
					'status' => 'error',
					'message'=>'Email or Password are invalid',
					'user_id'	  => (!empty($result->id)?$result->id:null)
				);
				echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);

			}
				
		}

	}


}