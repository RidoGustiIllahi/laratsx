<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKanbanColumnRequest extends FormRequest {
  public function authorize(): bool {
    return true;
  }

  public function rules(): array {
    return [
      'name' => ['required', 'string', 'max:255'],
      'color' => ['required', 'string', 'max:255'],
      'status_name' => ['required', 'string', 'max:255'],
      'status_color' => ['required', 'string', 'max:255'],
    ];
  }
}
