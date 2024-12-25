import backgroundImage from '@/assets/images/backgroundimg.jpg';

function App() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    
<div>
    <h1>Login</h1>
    <div>
        <input type="email" />
        <label htmlFor="">Your Email</label>
    </div>
    <div>
        <input type="email" />
        <label htmlFor="">Your Email</label>
    </div>

    <div>
        <div>
            <input type="checkbox" name=""  id="" />
            <label htmlFor="Remember"></label>
        </div>
        <span>Forget Password</span>
    </div>


</div>


    </div>

  );
}

export default App;