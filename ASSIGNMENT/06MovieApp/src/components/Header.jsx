import Search from './Search';

function Header({ title, onSearch }) {
  return (
    <div>

    <header>
    <nav className="navbar" style={{backgroundColor: '#FF4545'}}>
    <div className='container'>
        <h1>{title}</h1>
        <Search onSearch={onSearch}/>
    </div>
    </nav>
    </header>
    <div className='container'>
      <h1 className="my-text-primary"> Users</h1>
    </div>
    </div>
  );
}

export default Header;
