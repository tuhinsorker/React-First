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


	
	public function newslist_by_category(){

		$cat_slug = $this->input->get('cat_slug');


		if (empty($cat_slug)) {

			$json = array(
				'status'  => 'error',
				'error' => "Please fillup all required field !"
			);
			echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);

		}else{

			$newses = array();

			if (!empty($cat_slug)) {

		        $newses = $this->db->select('news_position.*,news_mst.*,user_info.id as user_id,user_info.name,user_info.photo,categories.category_name')
		        ->from('news_position')
		        ->join('news_mst', 'news_mst.news_id=news_position.news_id')
		        ->join('user_info', 'user_info.id=news_mst.post_by')
		        ->join('categories', 'categories.slug=news_mst.page')
		        ->where('news_position.page', $cat_slug)
		        ->where('news_position.status',1)
		        ->where('news_position.position >',0)
		        ->where('news_mst.publish_date <=',date("Y-m-d"))
		        ->limit(10)
		        ->order_by('news_position.position', 'asc')
		        ->order_by('news_position.news_id', 'DESC')
		        ->get()
		        ->result();

			}


			if (!empty($newses)) {

				foreach ($newses as $newss) {

					$fullnews  = htmlspecialchars_decode($newss->news);
					
					$json[] = array(

						'id' 			=> $newss->news_id,
						'encode_title'	=> (!empty($newss->encode_title)?$newss->encode_title:null),
						'title'			=> (!empty($newss->title)?$newss->title:null),
						'image_thumb' 	=>  base_url() . 'uploads/thumb/' . $newss->image,
						'image_large' 	=>  base_url() .'uploads/' . $newss->image,
						'category_name' =>  $newss->category_name,
						'slug' 			=>  $newss->page,
						'news' 			=>  $fullnews,
						'short_news' 	=>  character_limiter($fullnews,150),
						'video' 		=>  $newss->videos,
						'post_date' 	=>  date('l, d M, Y', $newss->time_stamp),
						'time_stamp' 	=>  $newss->time_stamp,
						'post_by_name' =>	$newss->name,
						'post_by_photo'=>base_url() . ($newss->photo!=''?$newss->photo:'/uploads/user/Man1.png')
	            
					);
	            		
				}

				echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);

			}else{

				$json = array('status'=>'error','message'=>'data not found');
				echo $json_encode = json_encode($json,JSON_UNESCAPED_UNICODE);
			}

		}

		

		
	}


}