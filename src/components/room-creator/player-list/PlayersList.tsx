import "./PlayersList.css"
import  {Avatar} from "@heroui/avatar";

const PlayersList = () => {
    //create a list of 11 players with different names
    const myPlayers = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Salah", "Kane", "Lewandowski", "De Bruynefdsfsfsefsdfsefsefsfed", "Kante", "Van dijk", "Alisson"];
    const players = myPlayers.map((player,index) => 
    <div key ={index}className="player-item">
        <Avatar
            //TODO: Add the player's image
            showFallback
            src="https://www.w3schools.com/howto/img_avatar.png"
        />
        {/* If player-name is too long, truncate */}
        <p className="player-name text-gray-700 dark:text-gray-300">{player}</p>
    </div>);

  return (
    <div className="player-container p-4">
        {players}
    </div>
  );
}

export default PlayersList;
