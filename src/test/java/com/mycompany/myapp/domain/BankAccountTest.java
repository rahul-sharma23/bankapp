package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.BankAccountTestSamples.*;
import static com.mycompany.myapp.domain.CustomerTestSamples.*;
import static com.mycompany.myapp.domain.TransactionTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class BankAccountTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(BankAccount.class);
        BankAccount bankAccount1 = getBankAccountSample1();
        BankAccount bankAccount2 = new BankAccount();
        assertThat(bankAccount1).isNotEqualTo(bankAccount2);

        bankAccount2.setId(bankAccount1.getId());
        assertThat(bankAccount1).isEqualTo(bankAccount2);

        bankAccount2 = getBankAccountSample2();
        assertThat(bankAccount1).isNotEqualTo(bankAccount2);
    }

    @Test
    void transactionsTest() {
        BankAccount bankAccount = getBankAccountRandomSampleGenerator();
        Transaction transactionBack = getTransactionRandomSampleGenerator();

        bankAccount.addTransactions(transactionBack);
        assertThat(bankAccount.getTransactions()).containsOnly(transactionBack);
        assertThat(transactionBack.getBankAccount()).isEqualTo(bankAccount);

        bankAccount.removeTransactions(transactionBack);
        assertThat(bankAccount.getTransactions()).doesNotContain(transactionBack);
        assertThat(transactionBack.getBankAccount()).isNull();

        bankAccount.transactions(new HashSet<>(Set.of(transactionBack)));
        assertThat(bankAccount.getTransactions()).containsOnly(transactionBack);
        assertThat(transactionBack.getBankAccount()).isEqualTo(bankAccount);

        bankAccount.setTransactions(new HashSet<>());
        assertThat(bankAccount.getTransactions()).doesNotContain(transactionBack);
        assertThat(transactionBack.getBankAccount()).isNull();
    }

    @Test
    void customerTest() {
        BankAccount bankAccount = getBankAccountRandomSampleGenerator();
        Customer customerBack = getCustomerRandomSampleGenerator();

        bankAccount.setCustomer(customerBack);
        assertThat(bankAccount.getCustomer()).isEqualTo(customerBack);

        bankAccount.customer(null);
        assertThat(bankAccount.getCustomer()).isNull();
    }
}
