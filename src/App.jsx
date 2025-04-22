

function App() {

  function signUp(formData) {
    const email = formData.get('email');
    console.log(email);
    const password = formData.get('password');
    console.log(password);
    const description = formData.get('description');
    console.log(description);
    const employmentStatus = formData.get('employmentStatus');
    console.log(employmentStatus);
    const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    console.log(dietaryRestrictions);
    const data = {
      email,
      password,
      description,
      employmentStatus,
      dietaryRestrictions
    }
    console.log(data);
    // Here you can send the data to your server or perform any other action
    // For example, using fetch:
    // fetch('/api/signup', {
    //   method: 'POST',
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
        
          <button type="submit">Submit</button>

        </form>
      </section>
    </>
  )
}

export default App
