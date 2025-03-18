const GameDescription = () => {
    return (
        <div className=" text-center pl-8 pr-8">
            <div className="inline-block pt-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
                <h1 className="inline">Guess who selected the current&nbsp;</h1> 
                <h1 className="inline text-blue-500">music</h1>
            </div>
            <div>
                <p className="text-lg pt-4 text-gray-700 dark:text-gray-300">
                    Create a room, invite your friends and start guessing.
                </p>
            </div>
        </div>
    );
    }

export default GameDescription;