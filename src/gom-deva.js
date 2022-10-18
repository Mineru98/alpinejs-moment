import moment from "moment";

    const Plugin = function (Alpine) {
        Alpine.magic("moment", () => {
            moment.locale("gom-deva");
            return (value) => moment(value);
        });
    };
    
    export default Plugin;
    