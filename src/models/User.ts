import Model from './Model';

export default class TUser extends Model {
    public constructor(
        public readonly name: string
        , public readonly nick: string
        , public readonly id?: number
        , public readonly tgId?: number
        , public readonly avatar?: string
        , public readonly lang?: string
    ) {
        super();
    };

    public getById<TUser>(id: number) {
        return new TUser('test', 'test', id, 12324234, undefined, 'ru');
    }

    public save<TUser>(user: TUser): boolean {
        if (user?.id) {
            if (this.getById(user.id) !== null) {
                return true;
            }
        }

        return false;
    }

}