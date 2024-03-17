import { CredentialResponse } from '@react-oauth/google';
import axios from 'axios';

export interface IUser {
  email: string;
  password?: string;
  username?: string;
  imgURL?: string;
  id?: string;
  accessToken?: string; // Now using 'accessToken' without colon
  refreshToken?: string; // Now using 'refreshToken' without colon
}

 export const googleSignIn = async (credentialResponse: CredentialResponse) => {
    return new Promise<any>((resolve, reject) => {
    console.log('googleSignIn..');
    axios.post('http://localhost:3000/auth/google', {
        credentialResponse: credentialResponse
    }).then((response) => {
        console.log(response);
        localStorage.setItem('accessToken',response.data['access token:']);
        localStorage.setItem('refreshToken',response.data['refresh token:'])
        localStorage.setItem('userId', response.data['user id:']);
        localStorage.setItem('userName', response.data['username:']);
        localStorage.setItem('imgURL', response.data['imgURL:']);
        localStorage.setItem('email', response.data['email:']);
        localStorage.setItem('posts', JSON.stringify(response.data.posts));

      resolve(response.data);
    }).catch((error) => {
      console.error('Google sign in failed', error);
      reject(error);}
    );
  }
 )}
 

 