<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    
    We use Middleware to apply the same/common functions. This way, we apply the DRY principle in programming which stands for 'Do not Repeat Yourself'. Middleware can either be Global or Local. Global Middleware is applied for all routes while Local Middleware is applied/used for certain routes only.   

    Sessions allows us to maintain data will persist across requests and is stored on the client/browser. 

    bcrypt converts a password into a hash which is a very long string of characters. This way the real password is not revealed.  

    JWT stands for JSON Web Token. It provides security by using signed tokens. Signed tokens mean that these are tokens with valid keys. This is an added security because it will not only accept the username and password, it will require the key that was generated during that log in by the user. 

2.  What does bcrypt do in order to prevent attacks?

    bcrypt converts a password into a hash which is a very long string of characters. This way the real password is not revealed.

3.  What are the three parts of the JSON Web Token?

    The 3 parts of a JSON Web Token or JWT are: Header, Payload, and Signature. 
