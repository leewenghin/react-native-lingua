import { router } from "expo-router";

export function navigateToHome() {
  router.replace("/index");
}

export function getFieldError(
  errors: { fields?: unknown } | null | undefined,
  field: string,
): string | undefined {
  const fields = errors?.fields as
    | Record<string, { message?: string } | null | undefined>
    | undefined;
  return fields?.[field]?.message;
}

export function getFirstGlobalError(
  errors: { global?: { message?: string }[] | null } | null | undefined,
): string | undefined {
  return errors?.global?.[0]?.message;
}
