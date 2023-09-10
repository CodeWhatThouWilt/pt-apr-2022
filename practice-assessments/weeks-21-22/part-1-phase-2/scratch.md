## name - string

    - Constraints:
        - UNIQUE
    - Validations:
        - NOT NULL
        - UNIQUE
        - Uppercase
        - Length between 4-25

## alias - string

    - Constraint:
        - NOT NULL
        - UNIQUE
    - Validations:
        - UNIQUE
        - Length between 5 and 30

## affiliation - string

    - Constraint:
        - NOT NULL
    - Validations:
        - Has to be in ['Avengers', 'X-Men', 'Justice League']

## heightCm - integer

    - Constraints / Validations
        - NOT NULL
        - min 140
        - max 210

## isMutant - boolean - default = true

    - Constraints / Validations
        - NOT NULL
        - If true this.race must be human

## race - string

    - Constraints / Validations
        - NOT NULL
        - isLowercase
        - Letters only
        - Can't be an empty string
        - Only one word

## universe - string

    - Constraints / Validations
        - NOT NULL
        - Letters only
        - Must be "Marvel" or "DC"
        - Must be valid with this.affiliation:
            - Avengers - Marvel
            - X-Men - Marvel
            - Justice League - DC

## releaseYear - integer

    - Constraints / Validations
        - NOT NULL
        - min: 1938
        - max: 2022
        - Make sure to use different year for each seed
