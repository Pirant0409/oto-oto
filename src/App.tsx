import React from 'react';
import { Button, Input} from "@heroui/react";
const App: React.FC = () => (
  

  <div className="dark text-foreground bg-background w-screen h-screen p-8 flex items-start justify-center gap-4">
      <Input       
      isClearable
      className="max-w-xs"
      label="Room ID"
      type="email"
      variant="bordered"
      placeholder="R76ND2" />
      <Button className="font-bold" color="primary" variant="faded">
        Go
      </Button>
  </div>
);
export default App
