class XRouter {
    constructor() {}

    routes = [];
    set(path, handler) {
        this.routes.push({
            path,
            handler
        })
    }
    get(path, ...args) {
        let result = {
            value: null,
            result: 404
        };
        this.routes.map(route => {
            if (route.path = path) {
                try {
                    const value = route.handler(...args);

                    result = {
                        value,
                        result: 200
                    }
                }catch (e) {
                    result = {
                        value: e,
                        result: 500
                    }
                }
            }
        })

        return result;
    }
}
