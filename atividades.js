body { 
  margin: 0; font-family: Arial, sans-serif;
   background-color: #0b1e3c;
   color: #ffffff;
 }

 header {
display: flex;
 justify-content: space-between;
align-items: center; 
padding: 5px 20px;           
background-color: #09172f;
height: 70px;
}

nav a {
 color: #76b2f0; 
margin-left: 1rem; 
text-decoration: none;
 font-weight: bold;
 width: 150px;
 font-size: 20px;
 }
 nav a:hover {
  color: #ffffff;
}

.signup-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.signup-form input {
  padding: 0.75rem;
  width: 250px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

.signup-form input:focus {
  outline: 2px solid #5b4df5;
}

.success-message {
  font-size: 1.2rem;
  color: #76f076;
  text-align: center;
  margin-top: 2rem;
}
.logo {
   width: 150px;
  height: 150px;
  margin-top: 10px;
}
.hero {
 text-align: center;
 padding: 4rem 2rem; 
}

.hero h1 {
   font-size: 2.5rem;
    color: #76b2f0; 
  }

.hero p {
   font-size: 1.2rem; 
   margin: 1rem 0;
   }
 .botao{
   background-color: #5b4df5;
  border: none; 
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
}
