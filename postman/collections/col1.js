{
    "info": {
        "_postman_id": "8b42cbab-009f-480f-a378-cd111b01184e",
        "name": "postman-doc-2",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "user",
            "item": [
                {
                    "name": "Sample endpoint: Returns details about a particular user",
                    "id": "a8253951-5250-4a98-a5b7-0e5c41f2ab2d",
                    "request": {
                        "method": "GET",
                        "header": [],
                        "url": {
                            "raw": "{{baseUrl}}/user?id=62660523",
                            "host": [
                                "{{baseUrl}}"
                            ],
                            "path": [
                                "user"
                            ],
                            "query": [
                                {
                                    "key": "id",
                                    "value": "62660523",
                                    "description": "(Required) ID of the user"
                                }
                            ]
                        }
                    },
                    "response": [
                        {
                            "id": "a58358ce-f979-4e5a-ba7d-41c96f1e6ad4",
                            "name": "Sample response: Details about a user by ID",
                            "originalRequest": {
                                "method": "GET",
                                "header": [
                                    {
                                        "description": "Added as a part of security scheme: basic",
                                        "key": "Authorization",
                                        "value": "Basic <credentials>"
                                    }
                                ],
                                "url": {
                                    "raw": "{{baseUrl}}/user?id=62660523",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "user"
                                    ],
                                    "query": [
                                        {
                                            "key": "id",
                                            "value": "62660523"
                                        }
                                    ]
                                }
                            },
                            "status": "OK",
                            "code": 200,
                            "_postman_previewlanguage": "json",
                            "header": [
                                {
                                    "disabled": false,
                                    "description": "A link to the next page of responses",
                                    "key": "x-next",
                                    "value": "nulla do v"
                                },
                                {
                                    "key": "Content-Type",
                                    "value": "application/json"
                                }
                            ],
                            "cookie": [],
                            "responseTime": null,
                            "body": "{\n \"id\": -59208432,\n \"name\": \"magna sed\",\n \"tag\": \"eiusmod sunt irure in nulla\"\n}"
                        },
                        {
                            "id": "ac769a6f-9b06-4efd-bc97-dbfbac13ee6d",
                            "name": "Unexpected error",
                            "originalRequest": {
                                "method": "GET",
                                "header": [
                                    {
                                        "description": "Added as a part of security scheme: basic",
                                        "key": "Authorization",
                                        "value": "Basic <credentials>"
                                    }
                                ],
                                "url": {
                                    "raw": "{{baseUrl}}/user?id=62660523",
                                    "host": [
                                        "{{baseUrl}}"
                                    ],
                                    "path": [
                                        "user"
                                    ],
                                    "query": [
                                        {
                                            "key": "id",
                                            "value": "62660523"
                                        }
                                    ]
                                }
                            },
                            "status": "Internal Server Error",
                            "code": 500,
                            "_postman_previewlanguage": "json",
                            "header": [
                                {
                                    "key": "Content-Type",
                                    "value": "application/json"
                                }
                            ],
                            "cookie": [],
                            "responseTime": null,
                            "body": "{\n \"code\": -56373660,\n \"message\": \"in Lor\"\n}"
                        }
                    ]
                }
            ],
            "id": "a6494b18-272c-45fd-abec-ecc4a875dce8"
        }
    ],
    "auth": {
        "type": "basic",
        "basic": [
            {
                "key": "username",
                "value": "<Basic Auth Username>",
                "type": "string"
            },
            {
                "key": "password",
                "value": "<Basic Auth Password>",
                "type": "string"
            }
        ]
    },
    "variable": [
        {
            "id": "223b19b9-6624-407f-8b8f-d9cdbd6ac353",
            "key": "baseUrl",
            "value": "localhost:3000",
            "type": "string"
        }
    ]
}
