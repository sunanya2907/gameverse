const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#333', color: '#fff', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} GameVerse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;