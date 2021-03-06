import { HashedObject } from 'hhs';


class LinkupServer extends HashedObject {

    static className = 'hhs-home/v0/data/LinkupServer';

    url?: string;

    constructor(url?: string) {
        super();

        if (url !== undefined) {
            this.url = url;
        }
    }

    getClassName(): string {
        return LinkupServer.className;
    }

    init(): void {
        
    }

    validate(references: Map<string, HashedObject>): boolean {
        references;
        return this.url !== undefined && this.url.toLowerCase().startsWith('http');
    }
    
}

HashedObject.registerClass(LinkupServer.className, LinkupServer);

export { LinkupServer };