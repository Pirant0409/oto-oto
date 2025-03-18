import { Button, Input } from "@heroui/react";
import { useNavigate } from "react-router";

const CreateParty = () => {
    const navigate = useNavigate();
    return (
        <div className="flex  p-8 items-start justify-center gap-4">
            <Input       
                className="max-w-xs"
                label="Room name"
                type="text"
                variant="bordered"
                defaultValue="Random room name" 
            />
            <div className="pt-2">
                <Button className="font-bold" color="primary" variant="faded" onPress={() => {navigate("/room")}}>
                    Create
                </Button>
            </div>
        </div>
    );
}

export default CreateParty;