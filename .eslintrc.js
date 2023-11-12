module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "overrides": [
        {
            "files": ["*.js"],
            "parserOptions": {
                "ecmaVersion": 2020,
            }
        }
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["warn", "single"],
        "no-undef": "error"
    }
};
