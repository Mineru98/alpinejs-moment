import moment from "moment";
import "moment/locale/ca";

const Plugin = function (Alpine) {
    Alpine.magic("moment", () => {
        return (value) => moment(value);
    });
};

export default Plugin;
