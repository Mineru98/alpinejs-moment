import moment from "moment";

    const Plugin = function (Alpine) {
        Alpine.magic("moment", () => {
            moment.locale("uz");
            return (value) => moment(value);
        });
    };
    
    export default Plugin;
    