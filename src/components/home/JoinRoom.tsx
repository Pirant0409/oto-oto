import { Button, Input} from "@heroui/react";

const JoinRoom = () => {

    return (
        <div className="flex items-start p-8  justify-center gap-4">
            <Input       
                isClearable
                className="max-w-xs"
                label="Room ID"
                type="text"
                variant="bordered"
                placeholder="R76ND2" 
            />
            <div className="pt-2">

                <Button className="font-bold" color="primary" variant="faded">
                    Join
                </Button>
            </div>
        </div>
    );
  };
  
  export default JoinRoom;
  