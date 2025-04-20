// src/api/authApi.js
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_example123", // TODO: Replace with your actual Cognito User Pool ID
  ClientId: "exampleclientid1234567890", // TODO: Replace with your actual App Client ID
};

const userPool = new CognitoUserPool(poolData);

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        resolve({
          user: { name: email, accessToken },
        });
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};
