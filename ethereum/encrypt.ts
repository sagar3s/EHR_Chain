export = CryptoJS;

type WordArray = CryptoJS.lib.WordArray;
type CipherParams = CryptoJS.lib.CipherParams;
type X64Word = CryptoJS.x64.Word;

interface Encoder {

    stringify(wordArray: WordArray): string;

    parse(str: string): WordArray;
}

interface BufferedBlockAlgorithm {

    _minBufferSize: number;

    reset(): void;

    _append(data: WordArray | string): void;

    _process(doFlush?: boolean): WordArray;

    clone(): BufferedBlockAlgorithm;
}

interface Hasher {

    blockSize: number;

    reset(): void;

    update(messageUpdate: WordArray | string): this;

    finalize(messageUpdate?: WordArray | string): WordArray;
}

interface HasherStatic {

    create(cfg?: object): Hasher;
}

interface HasherHelper {
    (message: WordArray | string, cfg?: object): WordArray;
}

interface HmacHasherHelper {
    (message: WordArray | string, key: WordArray | string): WordArray;
}

interface Cipher {

    keySize: number;

    ivSize: number;

    readonly _ENC_XFORM_MODE: number;

    readonly _DEV_XFORM_MODE: number;

    reset(): void;

    process(dataUpdate: WordArray | string): WordArray;

    finalize(dataUpdate?: WordArray | string): WordArray;
}

interface CipherStatic {

    createEncryptor(key: WordArray, cfg?: CipherOption): Cipher;

    createDecryptor(key: WordArray, cfg?: CipherOption): Cipher;

    create(xformMode: number, key: WordArray, cfg?: CipherOption): Cipher;
}

interface CipherHelper {
    encrypt(message: WordArray | string, key: WordArray | string, cfg?: CipherOption): CipherParams;
    decrypt(ciphertext: CipherParams | string, key: WordArray | string, cfg?: CipherOption): WordArray;
}

interface CipherOption {

    iv?: WordArray | undefined;
    format?: Format | undefined;
    [key: string]: any;
}

interface Mode {

    processBlock(words: number[], offset: number): void;
}

interface ModeStatic {

    create(cipher: Cipher, iv: number[]): Mode;
}

interface BlockCipherMode {
    Encryptor: ModeStatic;
    Decryptor: ModeStatic;

    createEncryptor(cipher: Cipher, iv: number[]): Mode;

    createDecryptor(cipher: Cipher, iv: number[]): Mode;
}

interface BlockCipherMode {

    createEncryptor(cipher: Cipher): Mode;
}

interface Padding {

    pad(data: WordArray, blockSize: number): void;

    unpad(data: WordArray): void;
}

interface BlockCipher {

    blockSize: number;
}

interface BlockCipherOption {

    mode: Mode;

    padding: Padding;
}

interface Format {

    stringify(cipherParams: CipherParams): string;

    parse(str: string): CipherParams;
}

interface X64WordArray {

    words: number[];

    sigBytes: number;

    toX32(): WordArray;

    clone(): X64WordArray;
}

interface Base {

    clone(): this;
}

interface KDFOption {

    keySize?: number | undefined;

    hasher?: HasherStatic | undefined;

    iterations?: number | undefined;
}

declare global {
    namespace CryptoJS {

        export namespace lib {

            const Base: {

                extend(overrides: object): any;

                create(...args: any[]): any;

                mixIn(properties: object): any;
            };

            interface WordArray {

                words: number[];

                sigBytes: number;

                toString(encoder?: Encoder): string;

                concat(wordArray: WordArray): this;

                clamp(): void;

                clone(): WordArray;
            }
            const WordArray: {

                create(words?: number[], sigBytes?: number): WordArray;

                random(nBytes: number): WordArray;
            };

            const BufferedBlockAlgorithm: any;

            const Hasher: {

                _createHelper(hasher: HasherStatic): HasherHelper;

                _createHmacHelper(hasher: HasherStatic): HmacHasherHelper;
            };

            const Cipher: {

                _createHelper(cipher: Cipher): CipherHelper;
            };

            interface CipherParams {

                ciphertext: WordArray;

                key: WordArray;

                iv: WordArray;

                salt: WordArray;

                algorithm: CipherStatic;

                mode: Mode;

                padding: Padding;

                blockSize: number;

                formatter: Format;

                toString(formatter?: Format): string;
            }
            const CipherParams: {

                create(cipherParams: Partial<CipherParams>): CipherParams;
            };

            interface StreamCipher extends Cipher {

                blockSize: number;
            }

            const BlockCipherMode: any;

            const SerializableCipher: {

                encrypt(
                    cipher: CipherStatic,
                    message: WordArray | string,
                    key: WordArray,
                    cfg?: CipherOption,
                ): CipherParams;

                decrypt(
                    cipher: CipherStatic,
                    ciphertext: WordArray | string,
                    key: WordArray,
                    cfg?: CipherOption,
                ): CipherParams;

                _parse(ciphertext: CipherParams | string, format: Format): CipherParams;
            };

            const PasswordBasedCipher: {

                encrypt(
                    cipher: CipherStatic,
                    message: WordArray | string,
                    password: string,
                    cfg?: CipherOption,
                ): CipherParams;

                decrypt(
                    cipher: CipherStatic,
                    ciphertext: CipherParams | string,
                    password: string,
                    cfg?: CipherOption,
                ): WordArray;
            };
        }

        export namespace pad {

            const Pkcs7: Padding;

            const AnsiX923: Padding;

            const Iso10126: Padding;

            const Iso97971: Padding;

            const ZeroPadding: Padding;

            const NoPadding: Padding;
        }

        export namespace kdf {

            const OpenSSL: {

                execute(password: string, keySize: number, ivSize: number, salt?: WordArray | string): CipherParams;
            };
        }

        export namespace mode {

            const CBC: BlockCipherMode;

            const CFB: BlockCipherMode;

            const CTR: BlockCipherMode;

            const CTRGladman: BlockCipherMode;

            const OFB: BlockCipherMode;

            const ECB: BlockCipherMode;
        }

        export namespace format {

            const OpenSSL: Format;
            const Hex: Format;
        }

        export namespace enc {

            const Hex: Encoder;

            const Latin1: Encoder;

            const Utf8: Encoder;

            const Utf16: Encoder;
            const Utf16BE: Encoder;

            const Utf16LE: Encoder;

            const Base64: Encoder;

            const Base64url: Encoder;
        }

        export namespace algo {

            const MD5: HasherStatic;

            const SHA1: HasherStatic;

            const SHA256: HasherStatic;

            const SHA224: HasherStatic;

            const SHA512: HasherStatic;

            const SHA384: HasherStatic;

            const SHA3: HasherStatic;

            const RIPEMD160: HasherStatic;

            abstract class HMAC {

                static create(hasher: HasherStatic, key: WordArray | string): HMAC;

                reset(): void;

                update(messageUpdate: WordArray | string): this;

                finalize(messageUpdate?: WordArray | string): WordArray;
            }

            abstract class PBKDF2 {

                static create(cfg?: KDFOption): PBKDF2;

                compute(password: WordArray | string, salt: WordArray): WordArray;
            }

            abstract class EvpKDF {

                static create(cfg?: { keySize: number; hasher?: HasherStatic | undefined; iterations: number }): EvpKDF;

                compute(password: WordArray | string, salt: WordArray): WordArray;
            }

            const AES: CipherStatic;

            const DES: CipherStatic;

            const TripleDES: CipherStatic;

            const RC4: CipherStatic;

            const RC4Drop: CipherStatic;

            const Rabbit: CipherStatic;

            const RabbitLegacy: CipherStatic;
        }

        export namespace x64 {

            interface Word {

                not(): X64Word;

                and(word: X64Word): X64Word;

                or(word: X64Word): X64Word;

                xor(word: X64Word): X64Word;

                shiftL(n: number): X64Word;

                shiftR(n: number): X64Word;

                rotL(n: number): X64Word;

                rotR(n: number): X64Word;

                add(word: X64Word): X64Word;
            }

            const Word: {

                create(high: number, low: number): X64Word;
            };

            const WordArray: {
                create(words?: X64WordArray[], sigBytes?: number): X64WordArray;
            };
        }

        export const MD5: HasherHelper;

        export const HmacMD5: HmacHasherHelper;

        export const SHA1: HasherHelper;

        export const HmacSHA1: HmacHasherHelper;

        export const SHA256: HasherHelper;

        export const HmacSHA256: HmacHasherHelper;

        export const SHA224: HasherHelper;

        export const HmacSHA224: HmacHasherHelper;

        export const SHA512: HasherHelper;

        export const HmacSHA512: HmacHasherHelper;

        export const SHA384: HasherHelper;

        export const HmacSHA384: HmacHasherHelper;

        export const SHA3: HasherHelper;

        export const HmacSHA3: HmacHasherHelper;

        export const RIPEMD160: HasherHelper;

        export const HmacRIPEMD160: HmacHasherHelper;

        export function PBKDF2(password: WordArray | string, salt: WordArray | string, cfg?: KDFOption): WordArray;

        export const AES: CipherHelper;

        export const DES: CipherHelper;

        export const TripleDES: CipherHelper;

        export const RC4: CipherHelper;

        export const RC4Drop: CipherHelper;

        export const Rabbit: CipherHelper;

        export const RabbitLegacy: CipherHelper;

        export function EvpKDF(
            password: WordArray | string,
            salt: WordArray | string,
            cfg?: {
                keySize: number;
                hasher?: HasherStatic | undefined;
                iterations: number;
            },
        ): WordArray;
    }
}