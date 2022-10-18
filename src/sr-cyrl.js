import moment from "moment";

    const Plugin = function (Alpine) {
        Alpine.magic("moment", () => {
            moment.locale("sr-cyrl");
            return (value) => moment(value);
        });
    };
    
    export default Plugin;
    