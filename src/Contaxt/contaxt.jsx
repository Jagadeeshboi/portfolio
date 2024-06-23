import React, { useContext, useState } from "react";

// Step 1: Create a context
const ContactContext = React.createContext(); // The name here is corrected for consistency and clarity

// This component provides the context value to its children
function ContaxtApi({ children }) {
  const [isTrue, setIsTrue] = useState(false); // Corrected setter function name for consistency

  return (
    // Step 2: Use the correct Provider property
    <ContactContext.Provider 
      value={{
        isTrue, 
        setIsTrue // Use camelCase for JavaScript identifiers
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

// Custom hook for using the context
export function useContactApi() { // Corrected function name for consistency
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContactApi must be used within a ContaxtApi Provider');
  }
  return context;
}

export default ContaxtApi;
