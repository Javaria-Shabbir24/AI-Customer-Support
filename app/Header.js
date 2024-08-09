import Image from 'next/image';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </div>
      <h1 style={headingStyle}>Chatty Cuddle</h1>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'black',
  borderBottom: '2px solid #ddd',
};

const logoStyle = {
  position: 'absolute',
  left: '20px',
};

const headingStyle = {
  margin: 0,
  fontSize: '24px',
  fontWeight: 'bold',
};

export default Header;
