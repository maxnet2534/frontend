
const Header = () => {
  const content = (
    <div className="body">
      <header className="header">
        <section className="header-title-line">
          <h1>ยื่นเอกสาร <span className="header-title-span">ออนไลน์</span></h1>
          <p>สวัสดี ...</p>
        </section>
      </header>

      <aside className="sidebar">
        <ul>
          <li><p>Item1</p></li>
          <li><p>Item2</p></li>
          <li><p>Item3</p></li>
          <li><p>Item4</p></li>
        </ul>
      </aside>

      <main className="container">
        <form className="form-login">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" />

          <label htmlFor="password">Password: </label>
          <input type="password" name="password" />

          <div className="buttons-login">
            <button type="submit">Login</button>
            <button>Single Sing On</button>
          </div>
        </form>
      </main>

      <footer className="footer"><p>footer</p></footer>
    </div>
  )
  return content
}

export default Header