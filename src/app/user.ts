export class User {
        constructor(
                public name: string | null,
                public email: string | null,
                public password: string | null,
                public phone: number | null,
                public gender: string | null,
                public country: string | null,
                public agreeToTC: boolean | null
            ) {}
}
