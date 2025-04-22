

function App() {

  function signUp(formData) {

    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll('dietaryRestrictions');
   const allData = {
      ...data,
      dietaryRestrictions: dietaryData
    }
    console.log(allData);
    // Here you can send the data to your server or perform any other action
    // For example, using fetch:
    // fetch('/api/signup', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    

    // const email = formData.get('email');
    // console.log(email);
    // const password = formData.get('password');
    // console.log(password);
    // const description = formData.get('description');
    // console.log(description);
    // const employmentStatus = formData.get('employmentStatus');
    // console.log(employmentStatus);
    // const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    // console.log(dietaryRestrictions);
    // const favColor = formData.get('favColor');
    // console.log(favColor);
    // const data = {
    //   email,
    //   password,
    //   description,
    //   employmentStatus,
    //   dietaryRestrictions,
    //   favColor
    // }
    // console.log(data);
    // // Here you can send the data to your server or perform any other action
    // // For example, using fetch:
    // // fetch('/api/signup', {
    // //   method: 'POST',
  }

  return (
    <>
      <section>
        <h1>Sign Up Form</h1>
        <form action={signUp} >

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" defaultValue="johndoe@example.com" placeholder="johndoe@example.com" />
       
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" defaultValue="password123" placeholder="********" />

          <label htmlFor="description">Description:</label>
          <textarea id="description" defaultValue="This is a description" name="description"></textarea>

          <fieldset>
            <legend>Employment Status:</legend>
            <label>
              <input type="radio" name="employmentStatus" defaultChecked={true} value="unemployed" />
              Unemployed
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="part-time" />
              Part-time
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="full-time" />
              Full-time
            </label>
          </fieldset>

          <fieldset>
            <legend>Dietary restrictions:</legend>
            <label>
              <input type="checkbox" name="dietaryRestrictions" value="kosher" />
              Kosher
            </label>
            <label>
              <input type="checkbox" name="dietaryRestrictions" value="vegan" />
              Vegan
            </label>
            <label>
              <input type="checkbox" name="dietaryRestrictions" value="gluten-free" />
              Gluten-free
            </label>
          </fieldset>

          <label htmlFor="favColor">What is your favorite color?</label>
          <select id="favColor" name="favColor" required>
            <option value="" disabled selected>Select your favorite color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
          </select>
        
          <button type="submit">Submit</button>

        </form>
      </section>
    </>
  )
}

export default App
