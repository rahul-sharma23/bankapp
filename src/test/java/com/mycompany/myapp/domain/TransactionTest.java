package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.BankAccountTestSamples.*;
import static com.mycompany.myapp.domain.TransactionTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TransactionTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Transaction.class);
        Transaction transaction1 = getTransactionSample1();
        Transaction transaction2 = new Transaction();
        assertThat(transaction1).isNotEqualTo(transaction2);

        transaction2.setId(transaction1.getId());
        assertThat(transaction1).isEqualTo(transaction2);

        transaction2 = getTransactionSample2();
        assertThat(transaction1).isNotEqualTo(transaction2);
    }

    @Test
    void relatedBankAccountTest() {
        Transaction transaction = getTransactionRandomSampleGenerator();
        BankAccount bankAccountBack = getBankAccountRandomSampleGenerator();

        transaction.setRelatedBankAccount(bankAccountBack);
        assertThat(transaction.getRelatedBankAccount()).isEqualTo(bankAccountBack);

        transaction.relatedBankAccount(null);
        assertThat(transaction.getRelatedBankAccount()).isNull();
    }

    @Test
    void bankAccountTest() {
        Transaction transaction = getTransactionRandomSampleGenerator();
        BankAccount bankAccountBack = getBankAccountRandomSampleGenerator();

        transaction.setBankAccount(bankAccountBack);
        assertThat(transaction.getBankAccount()).isEqualTo(bankAccountBack);

        transaction.bankAccount(null);
        assertThat(transaction.getBankAccount()).isNull();
    }
}
