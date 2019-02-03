
const BASE_URL = 'http://localhost:3000/';
const POST = 'post/';
const COMMENT = 'comment/';

export default {
    async fetchPosts() {
        try {
            let response = await fetch(BASE_URL + POST);//BASE_URL + POST
            let responseJsonData = await response.json();
            return responseJsonData;

        } catch (error) { }
    },
  
    async fetchComments(id) {
        try {
//BASE_URL + COMMENT + id,
            let response = 
                await fetch(BASE_URL + COMMENT + id,
                     {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    

                    });
            let responseJsonData = await response.json();
            return responseJsonData;

        } catch (error) { }
    }
}

