import moment from "moment";

    const Plugin = function (Alpine) {
        Alpine.magic("moment", () => {
            moment.locale("nl-be");
            return (value) => moment(value);
        });
    };
    
    export default Plugin;
    