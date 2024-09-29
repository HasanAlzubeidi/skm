/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/marshals': {
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
    get: operations['getMarshals'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/leaderboard': {
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
            'application/json': components['schemas']['LeaderboardEntry'][];
          };
        };
        /** @description Internal server error. */
        500: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
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
            'application/json': components['schemas']['Error'];
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
  '/api/login': {
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
          'application/json': {
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
            'application/json': {
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
            'application/json': {
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
            'application/json': {
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
            'application/json': {
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
  '/api/signout': {
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
            'application/json': {
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
  '/api/signup': {
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
          'application/json': {
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
            'application/json': {
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
            'application/json': {
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
            'application/json': {
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
  '/api/user': {
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
    get: operations['getUser'];
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
          'application/json': components['schemas']['Marshal'][];
        };
      };
      /** @description error */
      default: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Error'];
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
          'application/json': {
            /** @example 12345-abcde */
            id?: string;
            /** @example user@example.com */
            email?: string;
            /** @example +1234567890 */
            phone?: string;
            /** @example {
             *       "provider": "email",
             *       "providers": [
             *         "email"
             *       ]
             *     } */
            app_metadata?: Record<string, never>;
            /** @example {
             *       "name": "John Doe",
             *       "role": "user"
             *     } */
            user_metadata?: Record<string, never>;
            /**
             * Format: date-time
             * @example 2023-09-01T12:34:56.789Z
             */
            created_at?: string;
          };
        };
      };
      /** @description User not found. */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            /** @example Error user not found */
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
          'application/json': {
            /** @example Internal server error */
            message?: string;
          };
        };
      };
    };
  };
}
