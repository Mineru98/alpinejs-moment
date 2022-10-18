import moment from "moment";

    const Plugin = function (Alpine) {
        Alpine.magic("moment", () => {
            moment.locale("mt");
            return (value) => moment(value);
        });
    };
    
    export default Plugin;
    