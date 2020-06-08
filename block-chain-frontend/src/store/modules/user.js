const state = {
    user: {
        cardID: '',
        name: '',
        ID: '',
        birth: '',
        sexual: '',
        deliverDate: '',
        PIN: '',
        privateKey: ''
    }
}

const mutations = {
    SET_USER: (state, user) => {
        state.user = user
    }
}

const actions = {
    getUser({ commit }) {
        let user = {
            cardID: '000000114514',
            name: 'Ricardo Milos',
            ID: 'R123',
            birth: '0661111',
            sexual: 'M',
            deliverDate: '1140514',
            PIN: '114514',
            privateKey: '-----BEGIN RSA PRIVATE KEY-----\n\
            MIIEpAIBAAKCAQEA0GQlaccyOhOZDCZaMAaEk1KSNAzYfGcJdYa7QuGl6DaCUQYV\n\
            UMRJNSDWiPtn4+XxjahdJ9mIRAa65PjJl3OsjyG9jmX7PYVkEYUqAuU0tal7tkLr\n\
            sxHkJCjR5QEYwf/VgCJ6o4EuFbAgre5noi5G2FAMmKOAzntF5cm23F1tp7oTgytE\n\
            7j9SP2Svr9ouHeCAbin5lY/xwvXnI5a4M4ZzFUomVZ3MNyHxgGMrl1Hcn/KRE/yT\n\
            7lMntHRv3KdDPUz/pM2vcb2bzacK3hNzw5OApHsv/iUIaqhZTU5OUKceKOlJpdVS\n\
            hdx3iRDNHqfKlQMf2ZArl3zwKCOSKDkMt/8TwQIDAQABAoIBAQDCFrQd2/A01THz\n\
            dfkDx95MlFglcF1lKFZQBud8eEuchsBDFIZfziFdATOvK3BseyrKRChXSCy5JweE\n\
            4Q5pJ8xtFwDEksk4WHeGNd+WCMJZ+/uEGroJ8zzoTLiJMMdNUKkaCYLtrBAvFPaq\n\
            6GPPUoibSZshww7hwUCtr3zHq6DI2D+WDX/gAGuBAaHTjvO88dqYct3VhcKiRHX4\n\
            8HHn16kIDP12uBi3yzYsbykrKpVNm9CRxmPygmJeo38Wq/C8aIZAJAsqzgn1jm1o\n\
            40W2Hk7zK0K3eKB6Ap/m7SifunpLvw00RwpOSJ0zmxW2r1j8iDHkwRnJQJXiW/Bi\n\
            gFkKYnNtAoGBAPhyXa09IW3rEw1rm++avnrcAEbBMFgc4FIIE2llCHT/Hnvgb1pu\n\
            pviocPeUqcoeUJJ2Jmnfh8hyFjZDqqiayOrnvuAX+Ak5qif18Kk2Fg8d5aHypnV7\n\
            +a2983B+VxHOyf8snP82Su7LKlSekoLcEOXedMEVTOD/gtl0EGCVv7T7AoGBANa6\n\
            CEFAJzvuxJ05e28ZwmU4DU/mIOYNLXdssOXP0tA1jwU/Ubf81KYuNSzd1o2IlgUV\n\
            4fv4S9PiAI5zYgKQ3LTqG+cH5ig00s2yOh/VKXDU6leQwSEf2T6FYZqgBpXZN4qC\n\
            zFW4lVlDrBNkMUfsnJ/VVvxlkOhMBaXf9mm2waVzAoGAC/+R8JTcMW/B2ssQm9Cw\n\
            VESdqs0XpZm3Z57GOTfM4cGUWk0rc4WWgLm5wusmDAHMyFX2YvSNnSuNUQ+RhVT8\n\
            UQPiHvZpXyCuzAE/nxxiklZSSbDrQw86rp5WzF79m3mOHcmsx1J66e9b2vxRfQpd\n\
            sow8vTpnHRKZ4iCNzexNdtMCgYAmvmBY7atmm/lr6QBFlp9FxixYu0w6Vixa/Qia\n\
            HrqKCO/qYXdsPDleVr4Pf2OEHB39gupInY+JBqFVEqqfjeXU2tz3/avgm09iAAOO\n\
            1NZqXnB+JkdCo81+A3EOBkvJ4+yqmFkoKmsANT6qLQzbTm0gRc0xM15HG9h1Coka\n\
            n/gm0wKBgQCMN7uNJvPKZcQGat6zuj7Nj1D2VtpSIZF6bzcP45ttMrnWUSP42rss\n\
            YefNcfqxRHW0RZu7mihUmQXRn7twWD3mR0/PCtmf5LN1rACGEvxvxTlGQOK+ENJ5\n\
            DG1utD3sq6Facw8PBEbfAn2uK0mYVo7ROFmgJQkf2z87W3P7rX19aA==\n\
            -----END RSA PRIVATE KEY-----'
        }
        commit('SET_USER', user)
    }
}

export default {
    state,
    mutations,
    actions
}