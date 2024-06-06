// Define light theme colors
const lightTheme = {
    background: '#ffffff',
    text: '#000000',
    // Add more colors as needed
  };
  
  // Define dark theme colors
  const darkTheme = {
    background: '#121212',
    text: '#ffffff',
    // Add more colors as needed
  };
  
  // Define a context for the theme
  export const ThemeContext = React.createContext({
    theme: lightTheme,
    toggleTheme: () => {},
  });

  // In your App component
export default function App() {
    const [theme, setTheme] = useState(lightTheme);
  
    // Function to toggle between light and dark themes
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* Your app content */}
      </ThemeContext.Provider>
    );
  }
  
  // In any component where you want to apply the theme
  export default function SomeComponent() {
    const { theme } = useContext(ThemeContext);
  
    return (
      <View style={{ backgroundColor: theme.background }}>
        <Text style={{ color: theme.text }}>Hello, World!</Text>
      </View>
    );
  }