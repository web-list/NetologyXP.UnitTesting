function getPrice() {
    //
}

function getBonusBalance() {
    //
}

function getOrderCount() {
    //
}

suite('clientBuyPizzaFromSite', function () {

    let price = getPrice();
    let bonusBalance = getBonusBalance();

    suite('clientBirthdayToday', function () {
        test("pizzaIsSweet", function () {
            assert.equal("sweet", "pizzaType");
        });
    });

    suite('clientBirthdayTomorrow', function () {
        test("pizzaIsNotSweet", function () {
            assert.equal("common", "pizzaType");
        })
    });

    suite('clientEnterPromoCode', function () {

        let price = getPrice();

        test("correctCode", function () {
            assert.equal(price - 100, "totalPrice");
        });

        test("incorrectCode", function () {
            assert.equal(price, "totalPrice");
        });
    });

    suite("inOrderTwoPizza", function () {

        test("currentTimeFromTenToSixteen", function () {
            assert.equal(price * 0.8, "totalPrice");
        });

        test("currentTimeLaterSixteen", function () {
            assert.equal(price, "totalPrice");
        });

    });

    suite("inOrderFourPizza", function () {

        // clientBuyPizzaFromSite_inOrderFourPizza_currentTimeFromTenToSixteen
        test("currentTimeFromTenToSixteen", function () {
            assert.equal(price, "totalPrice");
        });

        test("currentTimeLaterSixteen", function () {
            assert.equal(price, "totalPrice");
        });

    });

    suite("orderIsPaid", function () {
        // clientBuyPizzaFromSite_orderIsPaid_discountFivePercent - удачное название, присутствуют Act, Arrange и Assert
        test("discountFivePercent", function () {
            assert.equal(bonusBalance + 0.05 * price, "newBonusBalance");
        });
    });

    suite("orderInNotPaid", function () {
        // clientBuyPizzaFromSite_orderInNotPaid_notDiscount - удачное название, присутствуют Act, Arrange и Assert
        // clientBuyPizzaFromSite_orderInNotPaid - пропущен Assert
        test("notDiscount", function () {
            assert.equal(bonusBalance, "newBonusBalance");
        });
    });

    test("canUseBonusBalance", function () {
        assert.equal(true, "bonusBalanceLessOrEqualPrice");
    });

    test("cannotUseBonusBalance", function () {
        assert.equal(false, "bonusBalanceLessOrEqualPrice");
    });

    // если сумма заказа больше 1000, еще одна пицца в подарок
    let count = getOrderCount();

    suite("orderSumMoreThousand", function () {
        test("onePizzaInBonus", function () {
            assert.equal(count + 1, "totalCount");
        });
        test("bonusPizza", function () {
            assert.more(count, "totalCount");
        });
    });

    suite("orderSumEqualThousand", function () {

        // pizzaTests.clientBuyPizzaFromSite_orderSumEqualThousand_notBonusPizza - более удачное название, указана принадлежность к группе тестов pizzaTests
        // clientBuyPizzaFromSite_orderSumEqualThousand_notBonusPizza - правильное название
        // clientBuyPizzaFromSite_notBonusPizza - пропущен Arrange
        test("notBonusPizza", function () {
            assert.equal(count, "totalCount");
        });
    });

    //если клиент обратился впервые, зачислить 100 на бонусный счет
    suite("bonusBalanceIsZero", function () {

        // whenClientBuyPizzaFromSite.bonusBalanceIsZero_plusHundred - удачный вариант, присутствуют Act, Arrange и Assert
        // plusHundred.bonusBalanceIsZero - пропущен Act
        test("plusHundred", function () {
            assert.equal(bonusBalance + 100, "newBonusBalance");
        });
    });

});