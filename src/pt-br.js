import moment from "moment";

    const Plugin = function (Alpine) {
        Alpine.magic("moment", () => {
            moment.locale("pt-br");
            return (value) => moment(value);
        });
    };
    
    export default Plugin;
    