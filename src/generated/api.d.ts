/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/marshals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a list of marshals
         * @description Returns a a list of marshals
         */
        get: operations["getMarshals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve events
         * @description Retrieves a list of all events
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Event"][];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example An unexpected error occurred */
                            error?: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/events/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve a single event and its attendees
         * @description Retrieves a single event by its ID along with its attendees
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The ID of the event to retrieve */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful response containing the event and its attendees */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            event?: components["schemas"]["Event"];
                            attendees?: {
                                user_id?: string;
                                first_name?: string;
                                last_name?: string;
                                nickname?: string;
                            }[];
                        };
                    };
                };
                /** @description Event not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example An unexpected error occurred */
                            error?: string;
                        };
                    };
                };
            };
        };
        put?: never;
        /**
         * Add a user to the event
         * @description Adds a user as an attendee to the event with the given ID
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The ID of the event to add the user to */
                    id: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** @description The ID of the user to add to the event */
                        user_id: string;
                    };
                };
            };
            responses: {
                /** @description User successfully added to the event */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example User added to event */
                            message?: string;
                        };
                    };
                };
                /** @description User is already attending the event */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example An unexpected error occurred */
                            error?: string;
                        };
                    };
                };
            };
        };
        /**
         * Remove a user from the event
         * @description Removes a user as an attendee from the event with the given ID
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The ID of the event to remove the user from */
                    id: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** @description The ID of the user to remove from the event */
                        user_id: string;
                    };
                };
            };
            responses: {
                /** @description User successfully removed from the event */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example User removed from event */
                            message?: string;
                        };
                    };
                };
                /** @description User is not attending the event */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example An unexpected error occurred */
                            error?: string;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/leaderboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve leaderboard
         * @description Returns all users and their scores. Requires authentication.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Array of leaderboard entries */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LeaderboardEntry"][];
                    };
                };
                /** @description Internal server error. */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Internal server error */
                            error?: string;
                        };
                    };
                };
                /** @description error */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * User Login
         * @description Authenticate a user by their email and password.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * Format: email
                         * @description The user's email address.
                         */
                        email: string;
                        /** @description The user's password. */
                        password: string;
                    };
                };
            };
            responses: {
                /** @description Login successful */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Login successful */
                            message?: string;
                        };
                    };
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Invalid request data */
                            message?: string;
                        };
                    };
                };
                /** @description Authentication failed */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Authentication failed */
                            message?: string;
                        };
                    };
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example An unexpected error occurred */
                            message?: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/signout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * User Signout
         * @description Sign out the currently authenticated user.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description No content, user signed out. */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Internal server error */
                            message?: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/signup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * User Signup
         * @description Create a new user account by providing email and password.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * Format: email
                         * @description The user's email address.
                         */
                        email: string;
                        /** @description The user's password. */
                        password: string;
                    };
                };
            };
            responses: {
                /** @description Signup successful */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Sign up successful */
                            message?: string;
                        };
                    };
                };
                /** @description Sign up failed */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Sign up failed */
                            message?: string;
                        };
                    };
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example Internal server error */
                            message?: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the authenticated user
         * @description Retrieves the authenticated user's information using Supabase.
         */
        get: operations["getUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Marshal model
         * @description Marshal
         */
        Marshal: {
            /**
             * Name
             * Format: string
             * @description Name of the marshal
             */
            name?: string;
            /**
             * Location
             * Format: string
             * @description Location of the marshal
             */
            location?: string;
            /**
             * Phone
             * Format: string
             * @description Phone number of the marshal
             */
            phone?: string;
            /**
             * Email
             * Format: string
             * @description Email of the marshal
             */
            email?: string;
        };
        /**
         * Event model
         * @description Event object representing an event with details
         */
        Event: {
            /** @description Description of the event */
            description?: string | null;
            /**
             * Format: date-time
             * @description End time of the event
             */
            end_time: string;
            /** @description Unique identifier for the event */
            id: number;
            /**
             * @description Invitation type for the event
             * @enum {string}
             */
            invitation_type: "Everyone" | "Gamlingar" | "Aktiva";
            /** @description Location of the event */
            location: string;
            /** @description Organizer of the event */
            organizer: string;
            /** @description Price of the event */
            price: number;
            /** @description Publisher of the event */
            publisher: string;
            /**
             * Format: date-time
             * @description Registration deadline for the event
             */
            registration_deadline?: string | null;
            /** @description Registration link for the event */
            registration_link?: string | null;
            /**
             * Format: date-time
             * @description Start time of the event
             */
            start_time: string;
            /** @description Title of the event */
            title: string;
        };
        /**
         * Leaderboard entry
         * @description Data for a row in the leaderboard
         */
        LeaderboardEntry: {
            /** @description Details about the person */
            person: {
                /**
                 * @description UID of the person
                 * @example 1a1abcd1-a1a1-12a1-12a1-12a12ab1a123
                 */
                id: string;
                /**
                 * @description URL of the person's avatar
                 * @example https://example.com/avatar.jpg
                 */
                avatar: string;
                /**
                 * @description Full name of the person
                 * @example John Doe
                 */
                name: string;
                /**
                 * @description Nickname of the person (can be null)
                 * @example Johnny
                 */
                nickname: string | null;
            };
            /**
             * @description Number of total patches
             * @example 10
             */
            total_patches: number;
            /**
             * @description Number of patches that have been sewn
             * @example 7
             */
            sewn_patches: number;
            /**
             * @description Number of patches that have not been sewn
             * @example 3
             */
            not_sewn_patches: number;
            /**
             * @description Number of medals earned by the person
             * @example 2
             */
            medals: number;
            /**
             * @description Number of pins earned by the person
             * @example 5
             */
            pins: number;
        };
        Error: {
            code: number;
            message: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getMarshals: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description successful operation */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Marshal"][];
                };
            };
            /** @description error */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully retrieved the user. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example 12345-abcde */
                        id?: string;
                        app_metadata?: {
                            /** @example email */
                            provider?: string;
                            /** @example [
                             *       "email"
                             *     ] */
                            providers?: string[];
                        };
                        user_metadata?: {
                            /** @example John Doe */
                            name?: string;
                            /** @example user */
                            role?: string;
                        };
                        /** @example authenticated */
                        aud?: string;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        confirmation_sent_at?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        recovery_sent_at?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        email_change_sent_at?: string | null;
                        /** @example new_user@example.com */
                        new_email?: string | null;
                        /** @example +1234567890 */
                        new_phone?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        invited_at?: string | null;
                        /** @example https://supabase.io/verify_email */
                        action_link?: string | null;
                        /** @example user@example.com */
                        email?: string | null;
                        /** @example +1234567890 */
                        phone?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        created_at?: string;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        confirmed_at?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        email_confirmed_at?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        phone_confirmed_at?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        last_sign_in_at?: string | null;
                        /** @example user */
                        role?: string | null;
                        /**
                         * Format: date-time
                         * @example 2023-09-01T12:34:56.789Z
                         */
                        updated_at?: string | null;
                        identities?: {
                            /** @example identity-12345 */
                            id?: string;
                            /** @example email */
                            provider?: string;
                            /**
                             * Format: date-time
                             * @example 2023-09-01T12:34:56.789Z
                             */
                            created_at?: string;
                        }[];
                        /** @example false */
                        is_anonymous?: boolean | null;
                        factors?: {
                            /** @example factor-12345 */
                            id?: string;
                            /** @example verified */
                            status?: string;
                        }[];
                    };
                };
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example User not found */
                        message?: string;
                    };
                };
            };
            /** @description Internal server error. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Internal server error */
                        message?: string;
                    };
                };
            };
        };
    };
}
