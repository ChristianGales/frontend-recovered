"use client"

import {
  type ComponentProps,
  type FormEvent,
  useState,
} from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import {
  authenticateStaff,
  createStaffSession,
} from "@/lib/auth/staff-auth"

import {
  type StaffLoginData,
  staffLoginSchema,
} from "@/lib/schemas/staff/login"

import type { StaffRole } from "@/types/staff/staff"

type LoginErrors = Partial<
  Record<keyof StaffLoginData, string>
>

const initialData: StaffLoginData = {
  employeeId: "",
  password: "",
}

const roleRedirects: Partial<Record<StaffRole, string>> = {
  admin: "/admin",
  college_registrar: "/registrar/college/",
  basic_education_registrar: "/registrar/basic-ed",
  instructor: "/faculty",
  teacher: "/faculty",
}

export function StaffLoginForm({
  className,
  ...props
}: ComponentProps<"div">) {
  const router = useRouter()

  const [formData, setFormData] =
    useState<StaffLoginData>(initialData)

  const [errors, setErrors] = useState<LoginErrors>({})
  const [loginError, setLoginError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (
    field: keyof StaffLoginData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }))
    }

    if (loginError) {
      setLoginError("")
    }
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    setLoginError("")

    const result = staffLoginSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors =
        result.error.flatten().fieldErrors

      setErrors({
        employeeId: fieldErrors.employeeId?.[0],
        password: fieldErrors.password?.[0],
      })

      return
    }

    setErrors({})
    setIsSubmitting(true)

    const staff = authenticateStaff(
      result.data.employeeId,
      result.data.password
    )

    if (!staff) {
      setLoginError(
        "Invalid employee ID or password."
      )
      setIsSubmitting(false)
      return
    }

    if (staff.status !== "active") {
      setLoginError(
        "Your staff account is currently inactive."
      )
      setIsSubmitting(false)
      return
    }

    const redirectPath = roleRedirects[staff.role]

    if (!redirectPath) {
      setLoginError(
        `No dashboard is configured for the "${staff.role}" role.`
      )
      setIsSubmitting(false)
      return
    }

    const session = createStaffSession(staff)

    // staff-login.tsx — inside handleSubmit, before setting activeStaff
    sessionStorage.removeItem("activeStudent")
    sessionStorage.setItem("activeStaff", JSON.stringify(session))

    sessionStorage.setItem(
      "activeStaff",
      JSON.stringify(session)
    )



    router.replace(redirectPath)
  }

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-6",
        className
      )}
      {...props}
    >
      <Card className="relative overflow-hidden border-border/60 bg-card/95 p-0 shadow-xl dark:bg-card/90">
        {/* Campus watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/images/dalakit-campus.png')] bg-cover bg-center opacity-[0.06] dark:opacity-[0.04]"
        />

        {/* Overlay for light and dark modes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-primary/10 dark:from-background/95 dark:via-background/90 dark:to-primary/10"
        />

        <CardContent className="relative grid p-0 md:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="relative z-10 p-5 sm:p-6 md:p-8"
            noValidate
          >
            <FieldGroup>
              {/* Heading */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="rounded-full bg-background/80 p-2 shadow-sm ring-1 ring-border backdrop-blur-sm dark:bg-background/60">
                  <img
                    src="/nsc-logo.png"
                    alt="Northern Samar Colleges logo"
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                  />
                </div>

                <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Staff Login
                </h1>

                <p className="max-w-sm text-balance text-sm text-muted-foreground">
                  Enter your employee ID and password
                  to access your account.
                </p>
              </div>

              {/* General login error */}
              {loginError && (
                <div
                  role="alert"
                  className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive dark:border-destructive/40 dark:bg-destructive/15"
                >
                  {loginError}
                </div>
              )}

              {/* Employee ID */}
              <Field>
                <FieldLabel htmlFor="employee-id">
                  Employee ID
                </FieldLabel>

                <Input
                  id="employee-id"
                  name="employeeId"
                  type="text"
                  value={formData.employeeId}
                  onChange={(event) =>
                    handleChange(
                      "employeeId",
                      event.target.value
                    )
                  }
                  placeholder="210001"
                  autoComplete="username"
                  aria-invalid={Boolean(
                    errors.employeeId
                  )}
                  aria-describedby={
                    errors.employeeId
                      ? "employee-id-error"
                      : undefined
                  }
                  className="h-10 bg-background/80 backdrop-blur-sm dark:bg-background/60"
                />

                {errors.employeeId && (
                  <p
                    id="employee-id-error"
                    role="alert"
                    className="text-xs font-medium text-destructive"
                  >
                    {errors.employeeId}
                  </p>
                )}
              </Field>

              {/* Password */}
              <Field>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <FieldLabel htmlFor="staff-password">
                    Password
                  </FieldLabel>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Input
                    id="staff-password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={(event) =>
                      handleChange(
                        "password",
                        event.target.value
                      )
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    aria-invalid={Boolean(
                      errors.password
                    )}
                    aria-describedby={
                      errors.password
                        ? "password-error"
                        : undefined
                    }
                    className="h-10 bg-background/80 pr-10 backdrop-blur-sm dark:bg-background/60"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    aria-pressed={showPassword}
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p
                    id="password-error"
                    role="alert"
                    className="text-xs font-medium text-destructive"
                  >
                    {errors.password}
                  </p>
                )}
              </Field>

              {/* Login button */}
              <Field>
                <Button
                  type="submit"
                  className="h-10 w-full text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Signing in..."
                    : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>

          {/* Staff illustration */}
          <div className="relative hidden min-h-[520px] overflow-hidden border-l border-border/50 bg-primary/5 md:block dark:bg-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/15" />

            <img
              src="/student-login.gif"
              alt="Staff login illustration"
              className="absolute inset-0 h-full w-full object-contain p-8 dark:brightness-90 lg:p-12"
            />
          </div>
        </CardContent>
      </Card>

      {/* Terms and privacy */}
      <FieldDescription className="px-4 text-center text-xs sm:px-6 sm:text-sm">
        By signing in, you agree to our{" "}
        <Link
          href="/terms"
          className="text-primary underline underline-offset-4"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-primary underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  )
}